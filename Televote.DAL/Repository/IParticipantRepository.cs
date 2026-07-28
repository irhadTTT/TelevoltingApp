using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using televolting_app.Util.Helpers;
using Televote.DAL.DataConnection;
using Televote.DAL.Entities;

namespace Televote.DAL.Repository
{
    public interface IParticipantRepository
    {
        Task<List<ParticipantVM>> GetParticipants();
        Task<long> SaveParticipant(ParticipantVM model);
        Task UpdateParticipant(ParticipantVM model);
        Task<int> DeleteParticipant(long id);
    }
    public class ParticipantRepository : IParticipantRepository
    {
        private readonly TeleVoltingDbContext _dbContext;
        public ParticipantRepository(TeleVoltingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<ParticipantVM>> GetParticipants()
        {
            if (_dbContext != null)
                return await _dbContext.Participants.Select(x => ParticipantMapper.ParticipantMap(x)).ToListAsync();
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

        public async Task<long> SaveParticipant(ParticipantVM model)
        {
            var item = new Participant
            {
                Name = model.Name,
                UserName = model.UserName,
                PasswordHash = HashPasswordService.GenerateHashPass(model.Password),
                DateTimeCreated = DateTime.Now,
                PersonCreatedId = 123
            };
            if (_dbContext != null)
            {
                _dbContext.Participants.Add(item);
                await _dbContext.SaveChangesAsync();
                return item.Id;
            }
            return 0;
        }
        public async Task UpdateParticipant(ParticipantVM model)
        {
            if (_dbContext != null)
            {
                var participant = await _dbContext.Participants.FindAsync(model.Id);
                participant.Name = model.Name;
                participant.PasswordHash = HashPasswordService.GenerateHashPass(model.Password);
                participant.CanVote = model.CanVote;
                await _dbContext.SaveChangesAsync();
            }
        }
        public async Task<int> DeleteParticipant(long id)
        {
            int result = 0;
            if (_dbContext != null)
            {
                var participant = await _dbContext.Participants.FirstOrDefaultAsync(x => x.Id == id);
                if (participant != null)
                {
                    _dbContext.Participants.Remove(participant);
                    result = await _dbContext.SaveChangesAsync();
                }
                return result;
            }
            return result;
        }
    }
}
