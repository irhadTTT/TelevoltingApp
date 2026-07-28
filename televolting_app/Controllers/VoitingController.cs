using Microsoft.AspNetCore.Mvc;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Televote.DAL.Repository;

namespace televolting_app.Controllers
{
    public class VoitingController : Controller
    {
        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();
        private readonly IVoitingRepository _voitingRepository;
        public VoitingController(IVoitingRepository voitingRepository)
        {
            _voitingRepository = voitingRepository;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [Route("GetVotes")]
        public async Task<IActionResult> GetVotes()
        {
            try
            {
                var admins = await _voitingRepository.GetVotes();
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
        [Route("SaveVote")]
        public async Task<IActionResult> SaveVote(VoitingVM[] models)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _voitingRepository.SaveVote(models);
                }
                catch (Exception exc)
                {
                    Logger.Error(exc);
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        [HttpGet]
        [Route("GetWinner")]
        public async Task<IActionResult> GetWinner()
        {
            try
            {
                var item = await _voitingRepository.GetWinner();
                if (item == null)
                {
                    return NotFound();
                }
                return Ok(item);
            }
            catch (Exception exc)
            {
                Logger.Error(exc);
                return BadRequest();
            }
        }
    }
}
