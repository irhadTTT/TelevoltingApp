using Televote.DAL.Entities;

namespace Televote.DAL.Repository
{
    public static class ParticipantMapper
    {
        public static ParticipantVM ParticipantMap(Participant p)
        {
            return new ParticipantVM
            {
                Name = p.Name,
            };
        }
    }
}
