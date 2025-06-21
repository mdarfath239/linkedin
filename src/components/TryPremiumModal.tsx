
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";

interface TryPremiumModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TryPremiumModal: React.FC<TryPremiumModalProps> = ({ open, onOpenChange }) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goals = [
    { id: "personal", label: "I'd use Premium for my personal goals" },
    { id: "job", label: "I'd use Premium as part of my job" },
    { id: "other", label: "Other" }
  ];

  const handleGoalChange = (goalId: string, checked: boolean) => {
    if (checked) {
      setSelectedGoals([...selectedGoals, goalId]);
    } else {
      setSelectedGoals(selectedGoals.filter(id => id !== goalId));
    }
  };

  const handleContinue = () => {
    // Handle premium signup logic here
    console.log("Selected goals:", selectedGoals);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full h-[90vh] overflow-y-auto p-0">
        <div className="flex">
          {/* Left side - Main content */}
          <div className="flex-1 p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#0A66C2] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">in</span>
                  </div>
                  <button 
                    className="text-sm text-[#0A66C2] hover:underline"
                    onClick={() => onOpenChange(false)}
                  >
                    Back to LinkedIn.com
                  </button>
                </div>
                <button 
                  onClick={() => onOpenChange(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </div>
              <DialogTitle className="text-2xl font-normal text-left mt-6">
                Don't let your next opportunity pass you. Network smarter with Premium.
              </DialogTitle>
            </DialogHeader>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  <img 
                    src="https://randomuser.me/api/portraits/men/41.jpg" 
                    alt="User 1" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/women/25.jpg" 
                    alt="User 2" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="User 3" 
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-gray-700">
                  <strong>Mohammed</strong> and millions of other members use Premium
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Enjoy 1 month free with round-the-clock support. We'll send you a reminder 7 days before your trial ends.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Plan recommendation</span>
                <span className="text-gray-500">0%</span>
              </div>
              <Progress value={0} className="h-2 bg-gray-200" />
            </div>

            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-medium mb-2">
                Mohammed, which of these best describes your primary goal for using Premium?
              </h3>
              <p className="text-gray-600 mb-6">Select all that apply</p>

              <div className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={goal.id}
                      checked={selectedGoals.includes(goal.id)}
                      onCheckedChange={(checked) => handleGoalChange(goal.id, checked as boolean)}
                    />
                    <label 
                      htmlFor={goal.id} 
                      className="text-gray-700 cursor-pointer"
                    >
                      {goal.label}
                    </label>
                  </div>
                ))}
              </div>

              <Button 
                onClick={handleContinue}
                className="w-full mt-6 bg-[#0A66C2] hover:bg-[#1573cf] text-white py-3 rounded-full font-semibold"
                disabled={selectedGoals.length === 0}
              >
                Continue
              </Button>
            </div>
          </div>

          {/* Right side - Testimonial */}
          <div className="w-80 bg-gray-50 p-8 border-l">
            <blockquote className="text-gray-700 mb-4">
              "With Premium, I grew my followers to 14,000, landed two jobs, and made hundreds of connections."
            </blockquote>
            <div className="flex items-center gap-3">
              <img 
                src="https://randomuser.me/api/portraits/men/67.jpg" 
                alt="Vugar Rustamli" 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-900 flex items-center gap-1">
                  Vugar Rustamli
                  <div className="w-4 h-4 bg-[#0A66C2] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">in</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">Program Consultant</div>
              </div>
            </div>

            {/* Chat support widget */}
            <div className="mt-auto pt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm border">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-gray-700">Questions?</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <X size={16} />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">Chat with a specialist</p>
                <div className="flex justify-end">
                  <div className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="white" strokeWidth="2" fill="white"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TryPremiumModal;
