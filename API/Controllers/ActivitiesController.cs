using Application.Activities;
using MediatR;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Activity = Domain.Activity;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    

    [HttpGet]
    public async Task<List<Activity?>> GetActivities()
    {
        return await Mediator.Send(new List.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(Guid id)
    {
        return await Mediator.Send(new Details.Query {Id = id});
    }

    [HttpPost]
    public async Task<IActionResult> CreateActivity([FromBody] Activity activity)
    {
        return Ok(await Mediator.Send(new Create.Command {Activity = activity}));
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditActivity(Guid id, [FromBody] Activity activity)
    {
        activity.Id = id;
        return Ok(await Mediator.Send(new Edit.Command { Activity = activity }));
    }
}