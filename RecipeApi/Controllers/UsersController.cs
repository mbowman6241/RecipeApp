using Microsoft.AspNetCore.Mvc;
using RecipeApi.Data;
using Microsoft.EntityFrameworkCore;
using RecipeApi.Models;

namespace RecipeApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly UsersDbContext _usersDbContext;

        public UsersController(UsersDbContext usersDbContext)
        {
            _usersDbContext = usersDbContext;
        }
        [HttpGet]
        public async Task <IActionResult> GetAllUsers()
        {
           var users = await _usersDbContext.Users.ToListAsync();

           return Ok(users);
        }

        [HttpPost]
        public async Task <IActionResult> AddUser([FromBody] User userRequest)
        {
            userRequest.Id = Guid.NewGuid();
            await _usersDbContext.Users.AddAsync(userRequest);
            await _usersDbContext.SaveChangesAsync();
            return Ok(userRequest);
        }
    }
}