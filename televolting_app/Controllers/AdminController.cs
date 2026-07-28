using Microsoft.AspNetCore.Mvc;
using NLog;
using System;
using System.Threading.Tasks;
using Televote.DAL.Repository;

namespace televolting_app.Controllers
{
    public class AdminController : ControllerBase
    {
        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();
        private readonly IAdminRepository _adminRepository;
        public AdminController(IAdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }
        [HttpGet]
        [Route("GetAdministrators")]
        public async Task<IActionResult> GetAdministrators()
        {
            try
            {   
                var admins = await _adminRepository.GetAdministrators();
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
        [Route("SaveAdmin")]
        public async Task<IActionResult> SaveAdmin(AdminVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var adminId = await _adminRepository.SaveAdmin(model);
                    if (adminId > 0)
                        return Ok(adminId);
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
        [Route("UpdateAdmin")]
        public async Task<IActionResult> UpdateAdmin(AdminVM model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    await _adminRepository.UpdateAdmin(model);
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
    }
}
