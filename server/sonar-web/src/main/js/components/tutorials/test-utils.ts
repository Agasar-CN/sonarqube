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
import { screen } from '@testing-library/react';
import { byRole, byText } from 'testing-library-selector';
import { BuildTools, GradleBuildDSL, OSs, TutorialModes } from './types';

const CI_TRANSLATE_MAP: Partial<Record<TutorialModes, string>> = {
  [TutorialModes.BitbucketPipelines]: 'bitbucket_pipelines',
  [TutorialModes.GitHubActions]: 'github_action',
  [TutorialModes.GitLabCI]: 'gitlab_ci',
};

export function getCopyToClipboardValue(i = 0, name = 'copy_to_clipboard') {
  return screen.getAllByRole('button', { name })[i].getAttribute('data-clipboard-text');
}

export function getCommonNodes(ci: TutorialModes) {
  return {
    secretsStepTitle: byRole('heading', {
      name: `onboarding.tutorial.with.${CI_TRANSLATE_MAP[ci]}.${
        ci === TutorialModes.GitHubActions ? 'create_secret' : 'variables'
      }.title`,
    }),
    ymlFileStepTitle: byRole('heading', {
      name: `onboarding.tutorial.with.${CI_TRANSLATE_MAP[ci]}.yaml.title`,
    }),
    genTokenDialogButton: byRole('button', {
      name: 'onboarding.token.generate.long',
    }),
    tokenNameInput: byRole('textbox', { name: 'onboarding.token.name.label' }),
    expiresInSelect: byRole('combobox', { name: '' }),
    tokenValue: byText('generatedtoken2'),
    linkToRepo: byRole('link', {
      name: `onboarding.tutorial.with.${CI_TRANSLATE_MAP[ci]}.${
        ci === TutorialModes.GitHubActions ? 'secret' : 'variables'
      }.intro.link`,
    }),
    allSetSentence: byText('onboarding.tutorial.ci_outro.all_set.sentence'),
  };
}

export function getTutorialActionButtons() {
  return {
    continueButton: byRole('button', { name: 'continue' }),
    generateTokenButton: byRole('button', { name: 'onboarding.token.generate' }),
    deleteTokenButton: byRole('button', { name: 'onboarding.token.delete' }),
    finishTutorialButton: byRole('button', { name: 'tutorials.finish' }),
  };
}

export function getTutorialBuildButtons() {
  return {
    describeBuildTitle: byRole('heading', { name: 'onboarding.build' }),
    mavenBuildButton: byRole('button', { name: `onboarding.build.${BuildTools.Maven}` }),
    gradleBuildButton: byRole('button', { name: `onboarding.build.${BuildTools.Gradle}` }),
    gradleDSLButton: (name: GradleBuildDSL) => byRole('button', { name }),
    dotnetBuildButton: byRole('button', { name: `onboarding.build.${BuildTools.DotNet}` }),
    cFamilyBuildButton: byRole('button', { name: `onboarding.build.${BuildTools.CFamily}` }),
    otherBuildButton: byRole('button', { name: `onboarding.build.${BuildTools.Other}` }),
    windowsDotnetCoreButton: byRole('button', {
      name: `onboarding.build.${BuildTools.DotNet}.win_core`,
    }),
    windowsDotnetFrameworkButton: byRole('button', {
      name: `onboarding.build.${BuildTools.DotNet}.win_msbuild`,
    }),
    linuxDotnetCoreButton: byRole('button', {
      name: `onboarding.build.${BuildTools.DotNet}.linux_core`,
    }),
    dotnetCoreButton: byRole('button', {
      name: `onboarding.build.${BuildTools.DotNet}.variant.dotnet_core`,
    }),
    dotnetFrameworkButton: byRole('button', {
      name: `onboarding.build.${BuildTools.DotNet}.variant.dotnet_framework`,
    }),
    linuxButton: byRole('button', { name: `onboarding.build.other.os.${OSs.Linux}` }),
    windowsButton: byRole('button', { name: `onboarding.build.other.os.${OSs.Windows}` }),
    macosButton: byRole('button', { name: `onboarding.build.other.os.${OSs.MacOS}` }),
  };
}
