namespace RecipeApi.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string? UserName { get; set; }
        public string? Password { get; set; }
    }

    public class AuthenticatedResponse
    {
        public string? Token { get; set; }
    }
}