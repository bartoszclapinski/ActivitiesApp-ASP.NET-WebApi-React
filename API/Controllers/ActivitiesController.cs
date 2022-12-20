using Application.Activities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Activity = Domain.Activity;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    private readonly IMediator _mediator;

    public ActivitiesController(IMediator mediator)
    {
        _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
    }

    [HttpGet]
    public async Task<List<Activity?>> GetActivities()
    {
        return await _mediator.Send(new List.Query());
    }

    [HttpGet("{id}")]
    public async Task<OkResult> GetActivity(Guid id)
    {
        return Ok();
    }
}