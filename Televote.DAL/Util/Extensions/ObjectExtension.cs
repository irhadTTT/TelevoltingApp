using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Televote.DAL.Util.Extensions
{
    public static class ObjectExtensions
    {
        public static string ToJson(this object o)
        {
            var settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver(), ReferenceLoopHandling = ReferenceLoopHandling.Ignore };
            return JsonConvert.SerializeObject(o, Formatting.Indented, settings);
        }
    }
}
