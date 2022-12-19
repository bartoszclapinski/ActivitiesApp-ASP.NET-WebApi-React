using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Activity = Domain.Activity;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    private readonly DataContext _context;

    public ActivitiesController(DataContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    [HttpGet]
    public async Task<List<Activity?>> GetActivities()
    {
        return await _context.Activities.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<Activity> GetActivity(Guid id)
    {
        return await _context.Activities.FindAsync(id);
    }
}