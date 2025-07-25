"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nationality: "",
    phone: "",
    arrivalDate: "",
    duration: "",
    adults: "",
    children: "",
    comments: "",
    packageType: "",
    destinations: [] as string[],
    customDestination: "", // Add this line
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const destinations = [
    "Galle",
    "Ella",
    "Kandy",
    "Nuwara Eliya",
    "Colombo",
    "Dambulla",
    "Anuradhapura",
    "Polonnaruwa",
    "Trincomalee",
    "Matara",
    "Arugam Bay",
    "Sigiriya",
    "Yala",
    "Wilpattu",
    "Mirissa",
    "Bentota",
    "Hikkaduwa",
    "Adams Peak",
  ]

  const handleDestinationChange = (destination: string) => {
    setFormData((prev) => {
      const newDestinations = [...prev.destinations]

      if (newDestinations.includes(destination)) {
        return {
          ...prev,
          destinations: newDestinations.filter((d) => d !== destination),
        }
      } else {
        return {
          ...prev,
          destinations: [...newDestinations, destination],
        }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      // Replace with your deployed Google Apps Script URL
      const url = "https://script.google.com/macros/s/AKfycbz_SsMGLwLaj2zsvtruitK4S1f8KQE3uvl8ujXHTxfefLgA32_gGaYuWvmPi7b8hEaq9A/exec"
      
      const formDataForSheet = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        nationality: formData.nationality,
        phone: formData.phone,
        arrivalDate: formData.arrivalDate,
        duration: formData.duration,
        adults: formData.adults,
        children: formData.children,
        packageType: formData.packageType,
        destinations: formData.destinations.join(", "),
        comments: formData.comments
      }).toString()

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataForSheet
      })

      if (!response.ok) {
        throw new Error('Failed to submit booking')
      }

      const result = await response.text()
      
      // Show success message
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        nationality: "",
        phone: "",
        arrivalDate: "",
        duration: "",
        adults: "",
        children: "",
        comments: "",
        packageType: "",
        destinations: [],
        customDestination: "", // Add this line
      })

    } catch (error) {
      console.error('Submission error:', error)
      setSubmitError("Failed to submit booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white scroll-mt-24" id="booking">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Book Your Sri Lankan Adventure</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Fill out the form below to start planning your perfect Sri Lankan journey. No card payments required at this
            stage.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Booking Inquiry</CardTitle>
            <CardDescription>Please provide your details and preferences for your trip to Sri Lanka</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input
                    id="nationality"
                    placeholder="Your nationality"
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telephone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number with country code"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arrival">Arrival Date in Sri Lanka</Label>
                  <Input
                    id="arrival"
                    type="date"
                    value={formData.arrivalDate}
                    onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">How many days will you spend in Sri Lanka?</Label>
                  <Input
                    id="duration"
                    type="number"
                    min="1"
                    placeholder="Number of days"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adults">Number of Adults</Label>
                  <Input
                    id="adults"
                    type="number"
                    min="1"
                    placeholder="Number of adults"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="children">Number of Children</Label>
                  <Input
                    id="children"
                    type="number"
                    min="0"
                    placeholder="Number of children"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="package">Package Type</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, packageType: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo Traveller Package</SelectItem>
                    <SelectItem value="couple">Couple Traveller Package</SelectItem>
                    <SelectItem value="group">Group/Family Traveller Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Choose the places you want to visit</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {destinations.map((destination) => (
                    <div key={destination} className="flex items-center space-x-2">
                      <Checkbox
                        id={`destination-${destination}`}
                        checked={formData.destinations.includes(destination)}
                        onCheckedChange={() => handleDestinationChange(destination)}
                      />
                      <Label htmlFor={`destination-${destination}`} className="text-sm font-normal">
                        {destination}
                      </Label>
                    </div>
                  ))}
                </div>
                
                {/* Add this new section for custom destination */}
                <div className="mt-4 flex gap-2">
                  <Input
                    placeholder="Add other destination"
                    value={formData.customDestination}
                    onChange={(e) => setFormData({ ...formData, customDestination: e.target.value })}
                  />
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => {
                      if (formData.customDestination.trim()) {
                        setFormData(prev => ({
                          ...prev,
                          destinations: [...prev.destinations, prev.customDestination.trim()],
                          customDestination: ""
                        }))
                      }
                    }}
                  >
                    Add
                  </Button>
                </div>
                
                {/* Show custom destinations */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.destinations.filter(d => !destinations.includes(d)).map(customDest => (
                    <div key={customDest} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
                      <span className="text-sm">{customDest}</span>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-red-500"
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          destinations: prev.destinations.filter(d => d !== customDest)
                        }))}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comments">Any Comments or Special Requests</Label>
                <Textarea
                  id="comments"
                  placeholder="Tell us about any special requirements or questions"
                  className="min-h-[100px]"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                />
              </div>

              {submitError && (
                <div className="text-red-500 text-sm">
                  {submitError}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                No card payments required at this stage. We will contact you to finalize your booking.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}