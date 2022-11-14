using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using RecipeApi.Data;
using RecipeApi.Models;

namespace RecipeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly UsersDbContext _usersDbContext;
        public AuthController(UsersDbContext usersDbContext)
        {
            _usersDbContext = usersDbContext;
        }
        [HttpPost("login")]
        public ActionResult Login([FromBody] User user)
        {
            var preAuthUser = _usersDbContext.Users.FirstOrDefault(u => u.UserName == user.UserName && u.Email == user.Email);

            if (preAuthUser == null)
            {
                return Unauthorized();
            }
            else
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                //TODO: Need to remove localhost
                var tokeOptions = new JwtSecurityToken(
                    issuer: "https://localhost:5165",
                    audience: "https://localhost:5165",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(5),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);

                return Ok(new AuthenticatedResponse { Token = tokenString });
            }
        }
    }
}