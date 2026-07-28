using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Televote.DAL.Entities
{
    [Table("Participant")]
    public partial class Participant : IEntity
    {
        public Participant()
        {
            Votings = new HashSet<Voting>();
        }
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        [Required(ErrorMessage = "You must insert name")]
        [StringLength(50, ErrorMessage = "Name must be up to 50 characters")]
        public string Name { get; set; }
        [Required(ErrorMessage = "You must insert user name")]
        [StringLength(50, ErrorMessage = "User name must be up to 50 characters")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "You must insert password")]
        [StringLength(100)]
        public string PasswordHash { get; set; }
        [Required]
        [DefaultValue(true)]
        public bool CanVote { get; set; } = true;
        public DateTime DateTimeCreated { get; set; }
        public DateTime? DateTimeChanged { get; set; }
        public long PersonCreatedId { get; set; }
        [ForeignKey("PersonCreatedId")]
        public virtual Administrator PersonParticipantCreated { get; set; }
        public long? PersonUpdatedId { get; set; }
        [InverseProperty("PersonParticipantVoted")]
        public ICollection<Voting> Votings { get; set; }
    }
}
