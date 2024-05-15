using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using restAPI.Model;

namespace restAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly ILogger<ProjectController> _logger;

        public ProjectController(ILogger<ProjectController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Project> Get()
        {
            using (StreamReader r = new StreamReader(".\\Assets\\Projects.json"))
            {
                string json = r.ReadToEnd();
                List<Project> projects = JsonConvert.DeserializeObject<List<Project>>(json);
                return projects ?? new List<Project>();
            }
        }
    }
}
