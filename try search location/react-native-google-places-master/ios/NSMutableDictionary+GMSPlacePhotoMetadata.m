//
//  NSMutableDictionary+GMSPlacePhotoMetadata.m
//  RNGooglePlaces
//
//  Created by paladin2 on 1/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NSMutableDictionary+GMSPlacePhotoMetadata.h"

@implementation NSMutableDictionary (GMSPlacePhotoMetadata)

+ (instancetype)dictionaryWithGMSPlacePhotoMetadata:(GMSPlacePhotoMetadata*)placeMetadata
{
    NSMutableDictionary *placeData =[[NSMutableDictionary alloc] init];
    placeData[@"attributions"] = placeMetadata.attributions;
    
    NSMutableDictionary *maxSize = [[NSMutableDictionary alloc] init];
    maxSize[@"width"] = [NSNumber numberWithFloat:placeMetadata.maxSize.width];
    maxSize[@"height"] = [NSNumber numberWithFloat:placeMetadata.maxSize.height];
    
    placeData[@"size"] = maxSize;
    
    return placeData;
}

@end

