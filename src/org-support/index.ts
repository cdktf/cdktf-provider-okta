/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/org_support
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgSupportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of days the support should be extended by
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/org_support#extend_by OrgSupport#extend_by}
  */
  readonly extendBy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/org_support#id OrgSupport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/org_support okta_org_support}
*/
export class OrgSupport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_org_support";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/org_support okta_org_support} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgSupportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrgSupportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_org_support',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.1.0',
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
    this._extendBy = config.extendBy;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // extend_by - computed: false, optional: true, required: false
  private _extendBy?: number; 
  public get extendBy() {
    return this.getNumberAttribute('extend_by');
  }
  public set extendBy(value: number) {
    this._extendBy = value;
  }
  public resetExtendBy() {
    this._extendBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendByInput() {
    return this._extendBy;
  }

  // id - computed: true, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extend_by: cdktf.numberToTerraform(this._extendBy),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
