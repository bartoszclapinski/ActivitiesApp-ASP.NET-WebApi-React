using Application.Activities;
using MediatR;
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
    public async Task<OkResult> GetActivity(Guid id)
    {
        return Ok();
    }
}