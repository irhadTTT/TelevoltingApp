using Televote.DAL.Entities;

namespace Televote.DAL.Repository
{
    public static class AdminMapper
    {
        public static AdminVM AdminMap(Administrator admin)
        {
            return new AdminVM
            {
                Id = admin.Id,
                Name = admin.Name,
                UserName = admin.UserName
            };
        }
    }
}
