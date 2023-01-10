using Domain;
using FluentValidation;

namespace Application.Activities;

public class ActivityValidator : AbstractValidator<Activity>
{
    public ActivityValidator()
    {
        RuleFor(activity => activity.Category).NotEmpty();
        RuleFor(activity => activity.City).NotEmpty();
        RuleFor(activity => activity.Date).NotEmpty();
        RuleFor(activity => activity.Description).NotEmpty();
        RuleFor(activity => activity.Title).NotEmpty();
        RuleFor(activity => activity.Venue).NotEmpty();
    }
}