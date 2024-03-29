import { type ReactElement } from 'react';

import { type FeatureFlags } from '@/shared/types/featureFlags';

import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { off, on, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }
    return off;
};

export { ToggleFeatures };
