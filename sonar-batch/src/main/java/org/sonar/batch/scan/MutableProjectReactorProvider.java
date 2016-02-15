/*
 * SonarQube
 * Copyright (C) 2009-2016 SonarSource SA
 * mailto:contact AT sonarsource DOT com
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
package org.sonar.batch.scan;

import java.io.File;
import java.io.IOException;
import org.picocontainer.injectors.ProviderAdapter;
import org.sonar.api.batch.bootstrap.ProjectReactor;
import org.sonar.core.util.FileUtils;

public class MutableProjectReactorProvider extends ProviderAdapter {
  private ProjectReactor reactor = null;

  public ProjectReactor provide(ProjectReactorBuilder builder) {
    if (reactor == null) {
      reactor = builder.execute();
      cleanDirectory(reactor.getRoot().getWorkDir());
    }
    return reactor;
  }

  private static void cleanDirectory(File dir) {
    try {
      FileUtils.cleanDirectory(dir);
    } catch (IOException e) {
      throw new IllegalStateException("Failed to recreate working directory: " + dir.getAbsolutePath(), e);
    }
  }
}
