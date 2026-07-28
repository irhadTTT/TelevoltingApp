using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Televote.DAL.DataConnection;
using Televote.DAL.Entities;

namespace Televote.DAL.Repository
{
    public interface IVoitingRepository
    {
        Task SaveVote(VoitingVM[] models);
        Task<List<VoitingVM>> GetVotes();
        Task<VoitingVM> GetWinner();
    }
    public class VoitingRepository : IVoitingRepository
    {
        private readonly TeleVoltingDbContext _dbContext;
        public VoitingRepository(TeleVoltingDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<VoitingVM>> GetVotes()
        {
            if (_dbContext != null)
                return await _dbContext.Votings.Select(x => VoitingMappers.VoitingMap(x)).ToListAsync();
            return null;
        }
        public async Task<VoitingVM> GetWinner()
        {
            if (_dbContext != null)
            {
                var item = await _dbContext.Participants.Include(i => i.Votings)
                 .GroupBy(i => new
                 {
                     i.Id,
                     i.Name,
                 }).Select(i => new
                 {
                     Id = i.Key.Id,
                     Name = i.Key.Name,
                     Count = i.Count(),
                     TotalPoints = i.Max(i => i.Votings.Sum(i => i.Points)),
                     VoitingCount = i.Select(c => c.Votings.Select(i => i.ParticipantId).Distinct().Count())
                 }).ToListAsync();
                var parCount = _dbContext.Participants.Count();
                //var items = await _dbContext.Votings.Include(i => i.PersonParticipantVoted).GroupBy(i => new
                //{
                //    i.ParticipantId,
                //    i.PersonParticipantVoted.Name,
                //}).Select(r => new VoitingVM
                //{
                //    ParticipantId = r.Key.ParticipantId,
                //    ParticipantName = r.Key.Name,
                //    Count = r.Count(),
                //    TotalPoints = r.Sum(i => i.Points)
                //}).ToListAsync();
            }
            return null;
        }
        public async Task SaveVote(VoitingVM[] models)
        {
            if (_dbContext != null)
            {
                long personLogedIn = 123;
                var votes = await _dbContext.Votings.Where(i => i.PersonCreatedId == personLogedIn).ToListAsync();
                if (votes.Count != 0)
                {
                    foreach (var model in models)
                    {
                        var vote = votes.Where(i => i.ParticipantId == model.ParticipantId).SingleOrDefault();
                        vote.Points = model.Points;
                        vote.PersonUpdateId = personLogedIn;
                        vote.DateTimeChanged = DateTime.Now;
                        await _dbContext.SaveChangesAsync();
                    }
                }
                else
                {
                    foreach (var model in models)
                    {
                        var item = new Voting
                        {
                            Points = model.Points,
                            ParticipantId = model.ParticipantId,
                            DateTimeCreated = DateTime.Now,
                            PersonCreatedId = model.PersonCreatedId
                        };
                        _dbContext.Votings.Add(item);
                    }
                    await _dbContext.SaveChangesAsync();
                }
            }
        }
    }
}
