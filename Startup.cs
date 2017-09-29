using System;
using System.IO;

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

using books_transaction_tracker.Models;

namespace books_transaction_tracker
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
				// Add service and create Policy with options
				services.AddCors(options =>
				{
					options.AddPolicy("CorsPolicy",
						builder => builder.AllowAnyOrigin()
						.AllowAnyMethod()
						.AllowAnyHeader()
						.AllowCredentials());
				});

            // Context
            services.AddDbContext<TrackerContext>();
            services.AddMvc();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
			{
                app.UseDeveloperExceptionPage();
			}

            app.Use(async (context, next) => {
				await next();
				if (context.Response.StatusCode == 404 &&
				   !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/", StringComparison.Ordinal))
				{
					context.Request.Path = "/index.html";
					await next();
				}
			});
            app.UseCors("CorsPolicy");
            app.UseMvc();
			app.UseDefaultFiles();
			app.UseStaticFiles();
        }
    }
}
