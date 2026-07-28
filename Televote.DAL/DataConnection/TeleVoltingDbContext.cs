using System.Data.Entity;
using Televote.DAL.Entities;

namespace Televote.DAL.DataConnection
{
    public partial class TeleVoltingDbContext : DbContext
    {
        public TeleVoltingDbContext() : base("TeleVoltingDbContext")
        {
        }
        public virtual DbSet<Administrator> Administrators { get; set; }
        public virtual DbSet<Participant> Participants { get; set; }
        public virtual DbSet<Voting> Votings { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Participant>()
               .HasIndex(e => e.Name)
               .IsUnique(true);

            modelBuilder.Entity<Participant>()
               .HasIndex(e => e.UserName)
               .IsUnique(true);

            modelBuilder.Entity<Administrator>()
               .HasIndex(e => e.Name)
               .IsUnique(true);

            modelBuilder.Entity<Administrator>()
               .HasIndex(e => e.UserName)
               .IsUnique(true);

            modelBuilder.Entity<Administrator>()
             .HasMany(i => i.Participants)
             .WithRequired(i => i.PersonParticipantCreated)
             .HasForeignKey(i => i.PersonCreatedId)
             .WillCascadeOnDelete(false);

            modelBuilder.Entity<Participant>()
            .HasMany(i => i.Votings)
            .WithRequired(i => i.PersonParticipantVoted)
            .HasForeignKey(i => i.ParticipantId)
            .WillCascadeOnDelete(false);
        }
    }
}
