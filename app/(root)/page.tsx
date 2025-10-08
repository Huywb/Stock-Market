'use client'
import TradingViewWidget from '@/components/TradingViewWidget'
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from '@/lib/contant'
import React from 'react'

const page = () => {

  return (
    <div className="flex min-h-screen home-wrapper">
      <section className='grid w-full gap-8 home-section'>
        <div className='md:col-span-1 xl:col-span-1'>
            <TradingViewWidget height={600} className='custom-chart' title='Market Overview' config={MARKET_OVERVIEW_WIDGET_CONFIG} scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js' />
        </div>

        <div className='md:col-span xl:col-span-2'>
            <TradingViewWidget height={600} className='custom-chart' title='Market Overview' config={HEATMAP_WIDGET_CONFIG} scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js' />
        </div>

      </section>

      <section className='grid w-full gap-8 home-section'>
        <div className='h-full md:col-span-1 xl:col-span-1'>
            <TradingViewWidget height={600} className='custom-chart' config={TOP_STORIES_WIDGET_CONFIG} scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-timeline.js' />
        </div>

        <div className='h-full md:col-span-1 xl:col-span-2'>
            <TradingViewWidget height={600} className='custom-chart' config={MARKET_DATA_WIDGET_CONFIG} scriptUrl='https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js' />
        </div>

      </section>
    </div>
  )
}

export default page
