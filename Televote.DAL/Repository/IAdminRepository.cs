using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using televolting_app.Util.Helpers;
using Televote.DAL.DataConnection;
using Televote.DAL.Entities;

namespace Televote.DAL.Repository
{
    public interface IAdminRepository
    {
        Task<List<AdminVM>> GetAdministrators();
        Task<long> SaveAdmin(AdminVM model);
        public Task UpdateAdmin(AdminVM model);
    }
    public class AdminRepository : IAdminRepository
    {
        private readonly TeleVoltingDbContext _dbContext;
        public AdminRepository(TeleVoltingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<AdminVM>> GetAdministrators()
        {
            if (_dbContext != null)
                return await _dbContext.Administrators.Select(x => AdminMapper.AdminMap(x)).ToListAsync();
            return null;
        }

        public async Task<AdminVM> GetAdmin(int id)
        {
            if (_dbContext != null)
            {
                return await _dbContext.Administrators.Where(i => i.Id == id)
                                        .Select(x => AdminMapper.AdminMap(x))
                                        .FirstOrDefaultAsync();
            }
            return null;
        }

        public async Task<long> SaveAdmin(AdminVM admin)
        {
            var item = new Administrator
            {           
                Name = admin.Name,
                UserName = admin.UserName,
                PasswordHash = HashPasswordService.GenerateHashPass(admin.Password)
            };
            if(_dbContext != null)
            {
                _dbContext.Administrators.Add(item);
                await _dbContext.SaveChangesAsync();
                return item.Id;
            }
            return 0;
        }
        public async Task UpdateAdmin(AdminVM model)
        {
            if (_dbContext != null)
            {
                var admin = await _dbContext.Administrators.FindAsync(model.Id);
                admin.Name = model.Name;
                admin.PasswordHash = HashPasswordService.GenerateHashPass(model.Password);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}
