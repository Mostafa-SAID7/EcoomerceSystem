namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class SetLocale
{
    public function handle($request, Closure $next)
    {
        $locale = Session::get('locale', config('app.locale'));
        App::setLocale($locale);
        return $next($request);
    }
}
// This middleware sets the application locale based on the session value or the default locale defined in the app configuration.
// It retrieves the locale from the session, and if not set, it uses the default locale from the configuration file. The locale is then set for the application using `App::setLocale()`.
// This allows the application to support multiple languages and switch between them based on user preference stored in the session.
