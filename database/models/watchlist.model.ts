import mongoose, { model, Model, models } from "mongoose"



export interface watchlistProp {
    userId: string,
    symbol: string,
    company: string,
    addedAt: Date
}

const WatchListSchema = new mongoose.Schema<watchlistProp>({
    userId: {type:String, required:true, index:true},
    symbol: {type: String, required:true, uppercase: true, trim: true},
    company: {type: String, required:true, trim: true}, 
    addedAt: {type: Date, default: Date.now}
},{timestamps: false})

WatchListSchema.index({userId : 1, symbol: 1},{unique: true})

export const Watchlist: Model<watchlistProp> = 
    (models?.Watchlist as Model<watchlistProp>) || model<watchlistProp>('Watchlist',WatchListSchema)