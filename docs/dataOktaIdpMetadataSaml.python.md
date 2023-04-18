# `data_okta_idp_metadata_saml`

Refer to the Terraform Registory for docs: [`data_okta_idp_metadata_saml`](https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml).

# `dataOktaIdpMetadataSaml` Submodule <a name="`dataOktaIdpMetadataSaml` Submodule" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpMetadataSaml <a name="DataOktaIdpMetadataSaml" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml okta_idp_metadata_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_metadata_saml

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  idp_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.idpId">idp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_id`<sup>Optional</sup> <a name="idp_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.idpId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetIdpId">reset_idp_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_id` <a name="reset_idp_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetIdpId"></a>

```python
def reset_idp_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_metadata_saml

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_metadata_saml

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_metadata_saml

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.assertionsSigned">assertions_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.authnRequestSigned">authn_request_signed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.encryptionCertificate">encryption_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpPostBinding">http_post_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpRedirectBinding">http_redirect_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.signingCertificate">signing_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpIdInput">idp_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpId">idp_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `assertions_signed`<sup>Required</sup> <a name="assertions_signed" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.assertionsSigned"></a>

```python
assertions_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `authn_request_signed`<sup>Required</sup> <a name="authn_request_signed" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.authnRequestSigned"></a>

```python
authn_request_signed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption_certificate`<sup>Required</sup> <a name="encryption_certificate" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.encryptionCertificate"></a>

```python
encryption_certificate: str
```

- *Type:* str

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `http_post_binding`<sup>Required</sup> <a name="http_post_binding" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpPostBinding"></a>

```python
http_post_binding: str
```

- *Type:* str

---

##### `http_redirect_binding`<sup>Required</sup> <a name="http_redirect_binding" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpRedirectBinding"></a>

```python
http_redirect_binding: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `signing_certificate`<sup>Required</sup> <a name="signing_certificate" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.signingCertificate"></a>

```python
signing_certificate: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_id_input`<sup>Optional</sup> <a name="idp_id_input" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpIdInput"></a>

```python
idp_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_id`<sup>Required</sup> <a name="idp_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpMetadataSamlConfig <a name="DataOktaIdpMetadataSamlConfig" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_metadata_saml

dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  idp_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.idpId">idp_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_id`<sup>Optional</sup> <a name="idp_id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.idpId"></a>

```python
idp_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}.

---



