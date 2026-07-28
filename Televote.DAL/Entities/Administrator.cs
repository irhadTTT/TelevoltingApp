using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Televote.DAL.Entities
{
    [Table("Administrator")]
    public partial class Administrator : IEntity
    {
        public Administrator()
        {
            Participants = new HashSet<Participant>();
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
        [InverseProperty("PersonParticipantCreated")]
        public ICollection<Participant> Participants { get; set; }
    }
}
