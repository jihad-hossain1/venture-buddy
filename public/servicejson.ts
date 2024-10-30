export const services = {
  "services": [
    
    {
      "name": "Website Development",
      "description": "Website development for small businesses and startups with secure payment integrations.",
      "cost": "$300 - $40,000",
      "features": [
        "Custom website platform",
        "Payment gateway integrations",
        "Scalable shopping experiences"
      ]
    },
   
    
    {
      "name": "E-commerce Development",
      "description": "Custom e-commerce platforms with secure payment integrations.",
      "cost": "$300 - $40,000",
      "features": [
        "Custom e-commerce platform",
        "Payment gateway integrations",
        "Scalable shopping experiences"
      ]
    },
   
    
    {
      "name": "IT Support & Maintenance",
      "description": "24/7 monitoring, proactive maintenance, and IT support services.",
      "cost": "$100 - $15,000",
      "features": [
        "24/7 monitoring",
        "System updates and troubleshooting",
        "Infrastructure management"
      ]
    }
  ],
  "custom_service":  {
      "name": "Custom Software Development",
      "plans": [
        {
          "plan_name": "Basic Plan",
          "cost": {
            "min": 500,
            "max": 15000
          },
          "description": "Standard web or mobile application with limited features and basic user interface.",
          "features": [
            "Limited features",
            "Basic UI/UX",
            "Minimal third-party integrations",
            "1-2 months delivery time",
            "1 month post-launch support"
          ]
        },
        {
          "plan_name": "Advanced Plan",
          "cost": {
            "min": 1500,
            "max": 50000
          },
          "description": "Fully customized software tailored to business needs with multiple features and advanced integrations.",
          "features": [
            "Custom UI/UX design",
            "Advanced integrations",
            "3-6 months delivery time",
            "6 months post-launch support"
          ]
        },
        {
          "plan_name": "Enterprise Plan",
          "cost": {
            "min": 5000,
            "max": 100000
          },
          "description": "Large-scale, highly scalable software with advanced security, integrations, and performance optimization.",
          "features": [
            "Highly scalable software",
            "Advanced security and performance optimization",
            "Dedicated team with senior developers",
            "6+ months delivery time",
            "1-year ongoing maintenance and support"
          ]
        }
      ],
      "dynamic_pricing": {
        "base_rate": 500,
        "complexity_multiplier": {
          "medium_complexity": 1.5,
          "high_complexity": 2
        },
        "additional_features": {
          "description": "Cost per additional feature (e.g., payment gateway, user authentication).",
          "cost_per_feature": 2000
        },
        "support_and_maintenance": {
          "description": "Annual support and maintenance fees.",
          "cost_range": {
            "min": 100,
            "max": 5000
          }
        },
        "formula": "Final Cost = Base Rate * Complexity Multiplier + (Additional Features * Cost Per Feature) + Support & Maintenance"
      }
    },
    "testimonials" : [
  {
    name: "John Doe",
    company: "Tech Innovators",
    testimonial:
      "The team at Venture Buddy delivered a fantastic product. Their custom software development expertise exceeded our expectations, and their support throughout the project was exemplary.",
  },
  {
    name: "Jane Smith",
    company: "Creative Solutions",
    testimonial:
      "Venture Buddy's IT consulting services transformed our business. Their insights and technical knowledge were instrumental in our successful digital transformation.",
  },
  {
    name: "Michael Johnson",
    company: "NextGen Tech",
    testimonial:
      "Exceptional service from start to finish. The cloud solutions provided by Venture Buddy were tailored perfectly to our needs and have significantly improved our operational efficiency.",
  },
  {
    name: "Jane Smith",
    company: "Creative Solutions",
    testimonial:
      "Venture Buddy's IT consulting services transformed our business. Their insights and technical knowledge were instrumental in our successful digital transformation.",
  },
  {
    name: "Michael Johnson",
    company: "NextGen Tech",
    testimonial:
      "Exceptional service from start to finish. The cloud solutions provided by Venture Buddy were tailored perfectly to our needs and have significantly improved our operational efficiency.",
  },
]
}
