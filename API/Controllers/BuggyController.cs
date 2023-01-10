using System.Reflection.Metadata.Ecma335;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public ActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("bad-request")] 
    public ActionResult GetBadRequest() => BadRequest("This is bad request.");

    [HttpGet("server-error")]
    public ActionResult GetServerError() => throw new Exception("This is a server error");

    [HttpGet("unauthorised")]
    public ActionResult GetUnauthorised() => Unauthorized();
}