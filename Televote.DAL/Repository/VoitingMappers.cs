using System;
using System.Collections.Generic;
using System.Text;
using Televote.DAL.Entities;

namespace Televote.DAL.Repository
{
    public static class VoitingMappers
    {
        public static VoitingVM VoitingMap(Voting vote)
        {
            return new VoitingVM
            {
                Id = vote.Id,
                Points = vote.Points,
                PersonParticipantVoted = vote.PersonParticipantVoted.Name,
                DateTimeCreated = vote.DateTimeCreated.ToString("mm.dd.yyyy"),
                DateTimeChanged = vote.DateTimeChanged?.ToString("mm.dd.yyyy")
            };
        }
    }
}
