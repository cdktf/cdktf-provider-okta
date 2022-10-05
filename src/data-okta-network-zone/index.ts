// https://www.terraform.io/docs/providers/okta/d/network_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaNetworkZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/network_zone#id DataOktaNetworkZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/network_zone#name DataOktaNetworkZone#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/network_zone okta_network_zone}
*/
export class DataOktaNetworkZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_network_zone";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/network_zone okta_network_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaNetworkZoneConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaNetworkZoneConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_network_zone',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.37.0',
        providerVersionConstraint: '~> 3.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asns - computed: true, optional: false, required: false
  public get asns() {
    return cdktf.Fn.tolist(this.getListAttribute('asns'));
  }

  // dynamic_locations - computed: true, optional: false, required: false
  public get dynamicLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_locations'));
  }

  // dynamic_proxy_type - computed: true, optional: false, required: false
  public get dynamicProxyType() {
    return this.getStringAttribute('dynamic_proxy_type');
  }

  // gateways - computed: true, optional: false, required: false
  public get gateways() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways'));
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // proxies - computed: true, optional: false, required: false
  public get proxies() {
    return cdktf.Fn.tolist(this.getListAttribute('proxies'));
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
