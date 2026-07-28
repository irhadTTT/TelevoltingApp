namespace Televote.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class VotingTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Voting",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Points = c.Short(nullable: false),
                        ParticipantId = c.Long(nullable: false),
                        DateTimeCreated = c.DateTime(nullable: false),
                        DateTimeChanged = c.DateTime(),
                        PersonCreatedId = c.Long(nullable: false),
                        PersonUpdateId = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Participant", t => t.ParticipantId)
                .Index(t => t.ParticipantId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Voting", "ParticipantId", "dbo.Participant");
            DropIndex("dbo.Voting", new[] { "ParticipantId" });
            DropTable("dbo.Voting");
        }
    }
}
