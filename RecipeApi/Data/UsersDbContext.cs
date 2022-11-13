using Microsoft.EntityFrameworkCore;
using RecipeApi.Models;

namespace RecipeApi.Data
{
    public class UsersDbContext : DbContext
    {
        public UsersDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}