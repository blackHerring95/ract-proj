FROM mcr.microsoft.com/dotnet/aspnet:8.0.3-nanoserver-ltsc2022 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0.203-nanoserver-ltsc2022 AS build
ARG BUILD_CONFGURATION=Release
WORKDIR /src
COPY . .
RUN dotnet restore  
RUN dotnet build "./restAPI/restAPI.csproj" -c $BUILD_CONFGURATION -o /app/build


FROM build as publish
ARG BUILD_CONFGURATION=Release
RUN dotnet publish "./restAPI/restAPI.csproj" -c $BUILD_CONFGURATION -o /app/publish /p:UseAppHost=false

from base as final
workdir /app
copy --from=publish /app/publish .
ENTRYPOINT ["dotnet", "./restAPI.dll"]


#when restoring,
#for error NU1301: Unable to load the service index for source https://api.nuget.org/v3/index.json
#you need to add this
#"dns": [
    #"1.1.1.1",
    #"8.8.8.8"
  #]
#to
#Docker desktop -> settings -> Docker Engine
