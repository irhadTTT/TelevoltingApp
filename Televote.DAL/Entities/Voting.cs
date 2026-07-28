using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Televote.DAL.Entities
{
    [Table("Voting")]
    public partial class Voting : IEntity
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public short Points { get; set; }
        public long ParticipantId { get; set; }
        [ForeignKey("ParticipantId")]
        public virtual Participant PersonParticipantVoted { get; set; }
        public DateTime DateTimeCreated { get; set; }
        public DateTime? DateTimeChanged { get; set; }
        public long PersonCreatedId { get; set; }
        public long? PersonUpdateId { get; set; }
    }
}
