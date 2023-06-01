/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search only ACTIVE applications.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app#active_only DataOktaApp#active_only}
  */
  readonly activeOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app#id DataOktaApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app#label DataOktaApp#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app#label_prefix DataOktaApp#label_prefix}
  */
  readonly labelPrefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app okta_app}
*/
export class DataOktaApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/app okta_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAppConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaAppConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_app',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.0.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeOnly = config.activeOnly;
    this._id = config.id;
    this._label = config.label;
    this._labelPrefix = config.labelPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: boolean | cdktf.IResolvable; 
  public get activeOnly() {
    return this.getBooleanAttribute('active_only');
  }
  public set activeOnly(value: boolean | cdktf.IResolvable) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // label_prefix - computed: false, optional: true, required: false
  private _labelPrefix?: string; 
  public get labelPrefix() {
    return this.getStringAttribute('label_prefix');
  }
  public set labelPrefix(value: string) {
    this._labelPrefix = value;
  }
  public resetLabelPrefix() {
    this._labelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPrefixInput() {
    return this._labelPrefix;
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_only: cdktf.booleanToTerraform(this._activeOnly),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      label_prefix: cdktf.stringToTerraform(this._labelPrefix),
    };
  }
}
