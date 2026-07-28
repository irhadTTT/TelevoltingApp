
using System;

namespace Televote.DAL.Repository
{
    public class VoitingVM
    {
        public long Id { get; set; }
        public short Points { get; set; }
        public long ParticipantId { get; set; }
        public string PersonParticipantVoted { get; set; }
        public string ParticipantName { get; set; }
        public string DateTimeCreated { get; set; }
        public string DateTimeChanged { get; set; }
        public long PersonCreatedId { get; set; }
        public long? PersonUpdateId { get; set; }
        public int TotalPoints { get; set; }
        public int Count { get; set; }
    }
}
