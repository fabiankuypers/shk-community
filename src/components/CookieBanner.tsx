import React, { useState, useEffect } from 'react';
import { X, Cookie, Settings } from 'lucide-react';
import Button from './Button';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
      // Initialize tracking based on saved preferences
      initializeTracking(savedPreferences);
    }
  }, []);

  const initializeTracking = (prefs: typeof preferences) => {
    // Placeholder for Google Tag Manager initialization
    if (prefs.analytics) {
      console.log('Analytics tracking enabled - GTM will be initialized here');
      // TODO: Initialize Google Tag Manager
      // gtag('config', 'GA_MEASUREMENT_ID');
    }
    
    if (prefs.marketing) {
      console.log('Marketing tracking enabled');
      // TODO: Initialize marketing pixels/tracking
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    initializeTracking(newPreferences);
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    initializeTracking(newPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    initializeTracking(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
      
      {/* Cookie Banner */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl border border-gray-200">
        {!showSettings ? (
          // Main Banner
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Wir verwenden Cookies
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Wir nutzen Cookies und ähnliche Technologien, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                  Einige sind notwendig für den Betrieb der Website, andere helfen uns dabei, diese Website und 
                  Ihre Erfahrung zu verbessern. Sie können Ihre Einstellungen jederzeit anpassen.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="primary" 
                    onClick={handleAcceptAll}
                    className="flex-1 sm:flex-none"
                  >
                    Alle akzeptieren
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleAcceptNecessary}
                    className="flex-1 sm:flex-none"
                  >
                    Nur notwendige
                  </Button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center justify-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Einstellungen
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Weitere Informationen finden Sie in unserer{' '}
                  <a href="/datenschutz" className="text-blue-600 hover:text-blue-800 underline">
                    Datenschutzerklärung
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Settings Panel
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Cookie-Einstellungen</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">Notwendige Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <div className="ml-4">
                  <div className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">Analyse-Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics 
                        ? 'bg-blue-600 justify-end' 
                        : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">Marketing-Cookies</h4>
                  <p className="text-sm text-gray-600">
                    Diese Cookies werden verwendet, um Ihnen relevante Werbung und Inhalte zu zeigen.
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing 
                        ? 'bg-blue-600 justify-end' 
                        : 'bg-gray-300 justify-start'
                    }`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="primary" 
                onClick={handleSavePreferences}
                className="flex-1 sm:flex-none"
              >
                Einstellungen speichern
              </Button>
              <Button 
                variant="outline" 
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;