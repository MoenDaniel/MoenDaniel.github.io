using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using retroApi.Models;
using retroApi.Services;
using Microsoft.Extensions.Options;
using retroApi.Sevices;

namespace retroApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.Configure<RetroGamesDatabaseSettings>(
                Configuration.GetSection(nameof(RetroGamesDatabaseSettings))
            );

            services.AddSingleton<IRetroGamesDatabaseSettings>(
                sp => sp.GetRequiredService<IOptions<RetroGamesDatabaseSettings>>().Value
            );

            services.AddSingleton<GameService>();
            services.AddSingleton<CharacterService>();

            //Legger til Cors. Gjør web-API'et tilgjengelig
            services.AddCors( options => {
                options.AddPolicy("AllowAll", builder => 
                    builder
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin()
                );
            });

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            
            app.UseStaticFiles();
            
            //AllowAnyOrigin
            app.UseCors("AllowAll");

            app.UseHttpsRedirection();

            //Tillater routing
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
