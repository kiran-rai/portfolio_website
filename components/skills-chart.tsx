"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function SkillsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")

      if (ctx) {
        // Destroy existing chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy()
        }

        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: "radar",
          data: {
            labels: ["SQL", "Power BI", "Python", "R", "Tableau", "Excel", "Statistical Analysis", "Product Analytics"],
            datasets: [
              {
                label: "Skill Level",
                data: [95, 95, 85, 80, 85, 95, 88, 92],
                backgroundColor: "rgba(147, 51, 234, 0.2)",
                borderColor: "rgba(147, 51, 234, 0.8)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(147, 51, 234, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(147, 51, 234, 1)",
              },
            ],
          },
          options: {
            scales: {
              r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  stepSize: 20,
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        })
      }
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full h-full min-h-[250px] flex items-center justify-center">
      <canvas ref={chartRef} />
    </div>
  )
}
