/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/threat_insight_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatInsightSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies how Okta responds to authentication requests from suspicious IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/threat_insight_settings#action ThreatInsightSettings#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/threat_insight_settings#id ThreatInsightSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of Network Zone IDs to exclude to be not logged or blocked by Okta ThreatInsight and proceed to Sign On rules evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/threat_insight_settings#network_excludes ThreatInsightSettings#network_excludes}
  */
  readonly networkExcludes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/threat_insight_settings okta_threat_insight_settings}
*/
export class ThreatInsightSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_threat_insight_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/threat_insight_settings okta_threat_insight_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatInsightSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatInsightSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_threat_insight_settings',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.2.0',
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
    this._action = config.action;
    this._id = config.id;
    this._networkExcludes = config.networkExcludes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkExcludes),
    };
  }
}
