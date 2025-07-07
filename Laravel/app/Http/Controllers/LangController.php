namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class LangController extends Controller
{
    public function switch(Request $request)
    {
        $lang = $request->lang;
        if (in_array($lang, ['en', 'ar'])) {
            session(['locale' => $lang]);
        }
        return back();
    }
}
