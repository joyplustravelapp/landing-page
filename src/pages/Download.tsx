import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const APP_STORE_URL = "https://apps.apple.com/fr/app/joy-plus-find-travel-friends/id6746488482?l=en-GB";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.joyplus.travel&pcampaignid=web_share";

const Download = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Detect iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = APP_STORE_URL;
      return;
    }

    // Detect Android devices
    if (/android/i.test(userAgent)) {
      window.location.href = GOOGLE_PLAY_URL;
      return;
    }

    // For desktop or unrecognized devices, default to App Store
    // You can change this to go to homepage or show both options
    window.location.href = APP_STORE_URL;
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Redirecting to app store...</p>
        </div>
      </div>
    </div>
  );
};

export default Download;
