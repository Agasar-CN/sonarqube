/*
 * SonarQube
 * Copyright (C) 2009-2023 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import { FlagMessage, HelperHintIcon } from 'design-system';
import React from 'react';
import HelpTooltip from '../../../components/controls/HelpTooltip';
import { translate } from '../../../helpers/l10n';

export default function IgnoredConditionWarning() {
  return (
    <FlagMessage
      ariaLabel={translate('overview.quality_gate.ignored_conditions')}
      className="sw-mb-4"
      variant="info"
    >
      <span>{translate('overview.quality_gate.ignored_conditions')}</span>
      <HelpTooltip
        className="sw-ml-2"
        overlay={translate('overview.quality_gate.ignored_conditions.tooltip')}
      >
        <HelperHintIcon aria-label="help-tooltip" />
      </HelpTooltip>
    </FlagMessage>
  );
}
