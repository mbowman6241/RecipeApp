namespace RecipeApi.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string? UserName { get; set; }
        public string? Email { get; set; }
    }

    public class AuthenticatedResponse
    {
        public string? Token { get; set; }
    }
}