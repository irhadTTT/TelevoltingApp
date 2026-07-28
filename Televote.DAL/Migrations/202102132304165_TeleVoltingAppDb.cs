namespace Televote.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TeleVoltingAppDb : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Administrator",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        UserName = c.String(nullable: false, maxLength: 50),
                        PasswordHash = c.String(nullable: false, maxLength: 100),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true)
                .Index(t => t.UserName, unique: true);
            
            CreateTable(
                "dbo.Participant",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        UserName = c.String(nullable: false, maxLength: 50),
                        PasswordHash = c.String(nullable: false, maxLength: 100),
                        CanVote = c.Boolean(nullable: false),
                        DateTimeCreated = c.DateTime(nullable: false),
                        DateTimeChanged = c.DateTime(),
                        PersonCreatedId = c.Long(nullable: false),
                        PersonUpdatedId = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Administrator", t => t.PersonCreatedId)
                .Index(t => t.Name, unique: true)
                .Index(t => t.UserName, unique: true)
                .Index(t => t.PersonCreatedId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Participant", "PersonCreatedId", "dbo.Administrator");
            DropIndex("dbo.Participant", new[] { "PersonCreatedId" });
            DropIndex("dbo.Participant", new[] { "UserName" });
            DropIndex("dbo.Participant", new[] { "Name" });
            DropIndex("dbo.Administrator", new[] { "UserName" });
            DropIndex("dbo.Administrator", new[] { "Name" });
            DropTable("dbo.Participant");
            DropTable("dbo.Administrator");
        }
    }
}
