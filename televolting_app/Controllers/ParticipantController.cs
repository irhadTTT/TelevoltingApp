using Microsoft.AspNetCore.Mvc;
using NLog;
using System;
using System.Threading.Tasks;
using Televote.DAL.Repository;

namespace televolting_app.Controllers
{
    public class ParticipantController : ControllerBase
    {
        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();
        private readonly IParticipantRepository _participantRepository;
        public ParticipantController(IParticipantRepository participantRepository)
        {
            _participantRepository = participantRepository;
        }
        [HttpGet]
        [Route("GetParticipants")]
        public async Task<IActionResult> GetParticipants()
        {
            try
            {
                var admins = await _participantRepository.GetParticipants();
                if (admins == null)
                    return NotFound();
                return Ok(admins);
            }
            catch (Exception e)
            {
                Logger.Error(e);
                return BadRequest();
            }
        }
        [HttpPost]
        [Route("SaveParticipant")]
        public async Task<IActionResult> SaveParticipant(ParticipantVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var id = await _participantRepository.SaveParticipant(model);
                    if (id > 0)
                        return Ok(id);
                    return NotFound();
                }
                catch (Exception exc)
                {
                    Logger.Error(exc);
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        [HttpPut]
        [Route("UpdateParticipant")]
        public async Task<IActionResult> UpdateParticipant(ParticipantVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _participantRepository.UpdateParticipant(model);
                    return Ok();
                }
                catch (Exception exc)
                {
                    Logger.Error(exc);
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        [HttpDelete("{id}")]
        [Route("DeleteParticipant")]
        public async Task<IActionResult> DeleteParticipant(long id)
        {
            try
            {
                var result = await _participantRepository.DeleteParticipant(id);
                if (result == 0)
                    return NotFound();
                return Ok();
            }
            catch (Exception exc)
            {
                Logger.Error(exc);
                return BadRequest();
            }
        }
    }
}
