
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CuisinesPage from "./pages/CuisinesPage";
import CuisineDetailsPage from "./pages/CuisineDetailsPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import PopularPage from "./pages/PopularPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cuisines" element={<CuisinesPage />} />
          <Route path="/cuisine/:id" element={<CuisineDetailsPage />} />
          <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
