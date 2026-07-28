using System;
using System.Collections.Generic;
using System.Text;

namespace Televote.DAL.Repository
{
    public class ParticipantVM
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool CanVote { get; set; }
        public string CanVoteString { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public DateTime? DateTimeChanged { get; set; }
        public string PersonCreatedFullName { get; set; }
        public string PersonUpdatedFullName { get; set; }
    }
}
