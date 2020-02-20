//
//  NSMutableDictionary+GMSPlacePhotoMetadata.h
//  RNGooglePlaces
//
//  Created by paladin2 on 1/12/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <GooglePlaces/GooglePlaces.h>

@interface NSMutableDictionary (GMSPlacePhotoMetadata)

+ (instancetype)dictionaryWithGMSPlacePhotoMetadata:(GMSPlacePhotoMetadata*)placeMetadata;

@end
